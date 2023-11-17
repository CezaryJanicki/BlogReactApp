const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article 1...',
      content: 'Main content of the article 1',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article 2 ...',
      content: 'Main content of the article 2',
      publishedDate: new Date('02-02-2022'),
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article 3...',
      content: 'Main content of the article 3',
      publishedDate: new Date('02-02-2022'),
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      publishedDate: new Date('02-02-2022'),
    }
  ],
};

export default initialState;
