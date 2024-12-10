type ExibicaoTuplaType = [string, string, string, Array <AnimaisTuplaType>];
export type AnimaisTuplaType = [string,string,number, boolean];
const EXIBICOES: Array<ExibicaoTuplaType> = [
    [
        "A1", 
        "2024-11-06T08:00:00.000-03:00",
        "2024-11-06T12:00-03:00",
        [["🦁","Leão", 190.0, true],
        ["🦩","Flamingo", 12.0, true],
        ["🦜","Papagaio", 0.120, false]]
    ],
    [
        "B2",
        "2024-11-06T13:00:00.000-03:00",
        "2024-11-06T17:00-03:00",
        [["🦒","Girafa", 1200.0, true]]
    ]
];

export default EXIBICOES;