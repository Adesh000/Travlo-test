export interface CityItem {
  ID: string;
  Desitnation: string;
  country: string;
  population: string;
}

export interface CityCardProp {
  item: CityItem;
}

export interface FilterModalProps {
  isVisible: boolean;
  closeModal: () => void;
  setSortOption: (option: 'name' | 'population' | null) => void;
}
