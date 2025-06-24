export type PlantaPreset = {
  luminosidade: { min: number; max: number };
  umidade: { min: number; max: number };
  temperatura: { min: number; max: number };
  ventilacao: number;
};

export type PlantasPresetsType = {
  [key: string]: PlantaPreset;
};
