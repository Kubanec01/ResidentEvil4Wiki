export interface CharType {
    name: string,
    image: string,
}

  export type QuestionProps = {
    id: string
    title: React.ReactNode;
    options: Readonly<{ id: string, label: string}[]>
    onSelect: (value: string) => void;
    selectedValue: string | null;
  }