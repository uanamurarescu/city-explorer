
export const getOrase = (destinatii) => {
    return destinatii.map((destinatii) => destinatii.oras);
}
export const getNevizitate = (list) => {
    return list.filter((d) => !d.vizitat);
}
export const totalZile = (list) => {
    return list.reduce((sum, d) => sum + d.zile, 0);
};

export const formatDestinatie = ({ oras, tara, zile, vizitat }) => {
  return `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`;
};

export const numarPeTara = (list) =>{
  return list.reduce((acc, { tara }) => {
    return { ...acc, [tara]: (acc[tara] ?? 0) + 1 };
  }, {});
};

export const sortDupaZile = (list) => {
  return [...list].sort((a, b) => b.zile - a.zile);
};

export const marcheazaVizitat = (list, id) => {
  return list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d));
};
export const adaugaDestinatie = (list, d) => {
  return [...list, d];
};
export const stergeDestinatie = (list, id) => {
  return list.filter((d) => d.id !== id);
};