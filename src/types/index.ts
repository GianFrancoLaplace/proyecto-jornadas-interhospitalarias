// app/types/index.
import { User } from "./user"

export enum WorkCategory {
    QUALITATIVE_RESEARCH = 'investigacion cualitativa',
    QUANTITATIVE_RESEARCH = 'investigacion cuantitativa',
    CASE_PRESENTATION = 'presentacion de casos',
    EXPERIENCE_REPORTS = 'relatos de experiencias'
}

export interface Origin {
    city: string;
    province: string;
    country: string;
}

export interface Author {
    id: number;
    name: string;
    lastname: string;
    affiliation: string | null;
    workId: number;
}

export interface Work {
    id: number;
    category: WorkCategory;
    description: string;
    userId: number;
    workCode: string;
    title: string;
    file: string | null;
    user?: User;
    authors: Author[];
}

export interface Statistics {
    statistics: string;
    amount: number;
}

// Tipo para el objeto de origen anidado
export type Origen = {
    ciudad: string;
    provincia: string;
    pais: string;
};

// Tipo principal para el objeto del profesional
export type Professional = {
    id: number;
    nombre: string;
    apellido: string;
    imagen: string | null; // La imagen puede ser una URL (string) o no existir (null)
    profesion: string;
    especializacion: string;
    lugarEjerce: string;
    origen: Origen; // Usamos el tipo que definimos arriba
};