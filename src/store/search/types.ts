export interface SearchResult {
  id: number;
  title: string;
  description: string;
  address: string;
  tel: string;
  link: string;
  status: number;
  city: {
    id: number;
    name: string;
  };
}

export interface SearchState {
  searchResults: SearchResult[];
}