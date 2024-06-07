export type Plans = {
    nameLabel: string,
    genderLabel: string,
    citizenshipLabel: string,
    skillsLabel: string,
    occupationLabel: string,
    memberOfLabel: string,
    creatorLabel: string
}
export interface RowHeroe {
    row: string;
}
export interface HeroPowerCount {
    quarter: string;
    [key: string]: string | number;
}
export interface SeriesType {
    type: 'bar';
    xKey: string;
    yKey: string;
    yName: string;
}