﻿using Styn.Domain.Entities.Common;
using System;

public class PatologiasUbreDTO  
{
    public int Id { get; set; }

    public DateTime Fecha { get; set; }

    public string RP { get; set; }

    public string Diagnostico { get; set; } 

    public string CuartosAfectados { get; set; }

    public string Tratamiento { get; set; }

    public string Observacion { get; set; }

    public string Responsable { get; set; }
}
