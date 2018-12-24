export const equalColorArrays = (first: number[], second: number[]) => {
    for (let i = 0; i < 4; i++) {
        if (first[i] !== second[i]) {
            return false;
        }
    }

    return true;
};

export const colorToArray = (color: string) : number[] => {
    switch (color) {
        case 'black':
            return [0, 0, 0, 255];
        case 'white':
            return [255, 255, 255, 255];
        case 'red':
            return [255, 0, 0, 255];
        case 'orange':
            return [255, 165, 0, 255];
        case 'yellow':
            return [255, 255, 0, 255];
        case 'green':
            return [0, 128, 0, 255];
        case 'blue':
            return [0, 0, 255, 255];
        case 'indigo':
            return [75, 0, 130, 255];
        case 'violet':
            return [238, 130, 238, 255]
    }

    return [0, 0, 0, 255];
};