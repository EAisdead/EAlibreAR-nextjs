const api = {
  item: {
    home: () =>
      fetch(`https://api.mercadolibre.com/sites/MLA`).then(
        (res) =>
          res.json() as Promise<{
            categories: {
              id: string;
              name: string;
            }[];
          }>
      ),
    categories: async (id: string) =>
      fetch(`https://api.mercadolibre.com/categories/${id}`).then(
        (res) =>
          res.json() as Promise<{
            id: string;
            name: string;
            total_items_in_this_category: string;
            children_categories: {
              id: string;
              name: string;
              total_items_in_this_category: string;
            }[];
          }>
      ),
    search: (query: string) =>
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
      ).then(
        (res) =>
          res.json() as Promise<{
            results: {
              id: string;
              title: string;
              thumbnail: string;
              thumbnail_id: string;
              price: number;
              currency_id: string;
              condition: string;
            }[];
          }>
      ),
    fetch: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
        (res) =>
          res.json() as Promise<{
            id: string;
            title: string;
            thumbnail: string;
            thumbnail_id: string;
            price: number;
            currency_id: string;
          }>
      );
      const { plain_text } = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      ).then(
        (res) =>
          res.json() as Promise<{
            plain_text: string;
          }>
      );
      return {
        ...item,
        description: plain_text,
      };
    },
  },
};

export default api;
