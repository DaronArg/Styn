# Plantilla para el Controller
$controllerTemplate = @"
using Application.Services;
using Microsoft.AspNetCore.Mvc;
using Styn.Domain.Dtos;

namespace Styn.ApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Ruta API estándar
    public class {ClassName}Controller : ControllerBase
    {
        // Asumiendo que la interfaz del servicio ahora está en Application.Services
        private readonly I{ClassName}Service _{className}Service;

        public {ClassName}Controller(I{ClassName}Service {className}Service)
        {
            // Inyecta la dependencia del servicio
            _{className}Service = {className}Service ?? throw new ArgumentNullException(nameof({className}Service));
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<{ClassName}DTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<{ClassName}DTO>>> GetAll{ClassName}s()
        {
            // Obtiene todos los elementos a través del servicio
            var items = await _{className}Service.GetAllAsync();
            return Ok(items); // Devuelve 200 OK con la lista de DTOs
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof({ClassName}DTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<{ClassName}DTO>> Get{ClassName}(int id)
        {
            // Obtiene un elemento por ID a través del servicio
            var item = await _{className}Service.GetByIdAsync(id);
            if (item == null)
            {
                // Si no se encuentra, devuelve 404 Not Found
                return NotFound($"No se encontró {ClassName} con ID {id}.");
            }
            // Si se encuentra, devuelve 200 OK con el DTO
            return Ok(item);
        }

        [HttpPost]
        [ProducesResponseType(typeof({ClassName}DTO), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<{ClassName}DTO>> Create{ClassName}([FromBody] {ClassName}DTO data)
        {
            // Valida el modelo recibido
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Devuelve 400 Bad Request si el modelo no es válido
            }
            // Crea el elemento a través del servicio
            var createdItem = await _{className}Service.CreateAsync(data);
            // Devuelve 201 Created con la ubicación del nuevo recurso y el DTO creado
            return CreatedAtAction(nameof(Get{ClassName}), new { id = createdItem.Id }, createdItem);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Update{ClassName}(int id, [FromBody] {ClassName}DTO data)
        {
            // Verifica que el ID de la ruta coincida con el del cuerpo
            if (id != data.Id)
            {
                return BadRequest("El ID de la ruta no coincide con el ID del cuerpo de la solicitud.");
            }
            // Valida el modelo recibido
             if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Devuelve 400 Bad Request si el modelo no es válido
            }

            try
            {
                // Actualiza el elemento a través del servicio
                await _{className}Service.UpdateAsync(data);
                return NoContent(); // Devuelve 204 No Content si la actualización fue exitosa
            }
            catch (KeyNotFoundException) // Captura si el servicio indica que el item no existe
            {
                // Devuelve 404 Not Found si el elemento no se encontró
                return NotFound($"No se encontró {ClassName} con ID {id} para actualizar.");
            }
            // Considera capturar otras excepciones específicas (ej. DbUpdateConcurrencyException) si es necesario
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete{ClassName}(int id)
        {
             try
            {
                // Elimina el elemento a través del servicio
                await _{className}Service.DeleteAsync(id);
                return NoContent(); // Devuelve 204 No Content si la eliminación fue exitosa
            }
            catch (KeyNotFoundException) // Captura si el servicio indica que el item no existe
            {
                 // Devuelve 404 Not Found si el elemento no se encontró
                return NotFound($"No se encontró {ClassName} con ID {id} para eliminar.");
            }
            // Considera capturar otras excepciones específicas si es necesario
        }
    }
}
"@

# Función para generar el archivo de Controller en el directorio actual
function Generate-ControllerFileHere {
    param (
        [string]$className,
        [string]$currentPath # La ruta donde se ejecuta el script
    )

    # Convertir la primera letra del nombre de la clase a minúscula para la variable de instancia
    $lowerClassName = $className.Substring(0, 1).ToLower() + $className.Substring(1)

    # Reemplazar los marcadores de posición en la plantilla
    # Ajusta el namespace y los 'using' si es necesario
    $controllerContent = $controllerTemplate -replace '{ClassName}', $className `
                                             -replace '{className}', $lowerClassName `
                                             -replace 'using Application\.Modules\.\{ClassName\}Module\.Services', 'using Application.Services' `
                                             -replace 'namespace Application\.Modules\.\{ClassName\}Module\.Controllers', 'namespace Application.Controllers'


    # Definir el nombre de archivo del Controller en el directorio actual
    $controllerFileName = Join-Path -Path $currentPath -ChildPath "$($className)Controller.cs"

    # Escribir el contenido al archivo de Controller
    try {
        $controllerContent | Out-File -FilePath $controllerFileName -Encoding utf8 -ErrorAction Stop
        Write-Host "Archivo Controller '$($className)Controller.cs' generado en: $currentPath"
    }
    catch {
        Write-Error "Error al escribir el archivo Controller: $($_.Exception.Message)"
    }
}

# --- Ejecución del Script ---

# Obtener la ruta del directorio donde se está ejecutando el script
if ($PSScriptRoot) {
    $executionPath = $PSScriptRoot
} else {
    $executionPath = (Get-Location).Path
    Write-Warning "Ejecutando fuera de un archivo .ps1. El archivo se generará en el directorio actual de la consola: $executionPath"
}

# Pedir al usuario que ingrese el nombre de la clase
$className = Read-Host "Ingrese el nombre de la clase para el Controller"
if ([string]::IsNullOrWhiteSpace($className)) {
    Write-Error "El nombre de la clase no puede estar vacío."
    exit
}

# Generar el archivo de Controller en el directorio actual
Generate-ControllerFileHere -className $className -currentPath $executionPath

Write-Host "Proceso de generación de Controller completado."

