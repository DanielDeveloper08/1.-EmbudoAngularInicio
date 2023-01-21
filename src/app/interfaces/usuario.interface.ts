export interface ResponseCurrentUserI {
    users:            User[];
    info:             Info;
    $responseHeaders: ResponseHeaders;
}

export interface ResponseHeaders {
    "x-ratelimit-remaining": null;
    "x-ratelimit-limit":     null;
    "x-ratelimit-reset":     null;
}

export interface Info {
    per_page:     number;
    count:        number;
    page:         number;
    more_records: boolean;
}

export interface User {
    created_time:     Date;
    Modified_Time:    Date;
    role:             ModifiedBy;
    image_link:       string;
    profile:          ModifiedBy;
    last_name:        null;
    microsoft:        boolean;
    locale:           string;
    created_by:       ModifiedBy;
    zuid:             string;
    confirm:          boolean;
    Modified_By:      ModifiedBy;
    locale_code:      string;
    full_name:        string;
    territories:      any[];
    alias:            null;
    id:               string;
    sandboxDeveloper: boolean;
    first_name:       string;
    email:            string;
    Reporting_To:     null;
    status:           string;
}

export interface ModifiedBy {
    name: string;
    id:   string;
}


//RESPUESTA

export interface ResponseSecciones {
    msj:   string;
    error: boolean;
    data:  Data;
}

export interface Data {
    cabecera: Cabecera;
    detalle:  Detalle[];
}

export interface Cabecera {
    keys:        string[];
    nameUsuario: string;
    values:      {[key: string]:number} ;
}

export interface Values {
    Negociacion:                  number;
    "Cerrado Ganado":             number;
    "Requerimiento de propuesta": number;
    "Planteamiento propuesta":    number;
}

export interface Detalle {
    Id:                       string;
    Owner:                    Owner;
    Stage:                    Stage;
    Deal_Name:                string;
    Fecha_estimada_de_cierre: Date;
    N_mero_de_la_Propuesta:   number | null;
    Account_Name:             TName;
    Amount:                   number;
    Contact_Name:             TName;
}

export interface TName {
    name: string;
    id:   string;
}

export interface Owner {
    name:  string;
    id:    string;
    email: string;
}

export interface Stage {
    value: string;
}

export interface GeneralResponse<T> {
    data: T;
    message: string;
  }

  export interface paramsToSend{
    fechaInicio:string;
    fechaFinal:string;
    idUsuario:string;
  }
  

