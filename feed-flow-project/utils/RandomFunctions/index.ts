export const randomQueryPhotos = () => {
    const queries = [
        "Funny",
        "Art",
        "Animals",
        "Coding",
        "Space",
        "Nature",
        "Night",
        "Underwater",
        "Adult"
    ];
    return queries[Math.floor(Math.random() * queries.length)];
};

export const randomQueryVideos = () => {
    const queries = [
        "Funny",
        "Art",
        "Animals",
        "Coding",
        "Space",
        "Nature",
        "Night",
        "Underwater",
        "Adult"
    ];
    return queries[Math.floor(Math.random() * queries.length)];
};

export const randomQueryOne = () => {
    const queries = [
        "Funny",
        "Art",
        "Animals",
        "Coding",
    ];
    return queries[Math.floor(Math.random() * queries.length)];
};

export const randomQueryTwo = () => {
    const queries = [
        "Space",
        "Nature",
        "Night",
        "Underwater",
    ];
    return queries[Math.floor(Math.random() * queries.length)];
};

export const randomQueryThree = () => {
    const queries = [
        "Adult",
        "Tesla",
        "Apple",
        "Love",
    ];
    return queries[Math.floor(Math.random() * queries.length)];
};