import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Foundational course covering programming basics, algorithms, and problem-solving.",
        createdAt: "2026-01-10T00:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Covers vectors, matrices, linear transformations, and systems of linear equations.",
        createdAt: "2026-01-12T00:00:00.000Z",
    },
    {
        id: 3,
        code: "ENG150",
        name: "Academic Writing",
        department: "English",
        description: "Develops university-level writing skills, argument structure, and source integration.",
        createdAt: "2026-01-14T00:00:00.000Z",
    },
];