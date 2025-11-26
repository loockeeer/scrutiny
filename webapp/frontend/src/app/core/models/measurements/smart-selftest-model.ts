export interface SmartSelftestModel {
    type: {
        value: number;
        string: string;
    };
    status: {
        value: number;
        string: string;
        passed: boolean;
    };
    lifetime_hours: number;
}
