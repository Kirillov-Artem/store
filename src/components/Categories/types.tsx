export interface categoriesType {
    key: string;
    name: string;
}

export interface CategoriesPropsType {
    filter: (value: string) => void;
}
