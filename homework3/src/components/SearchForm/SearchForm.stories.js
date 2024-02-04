import SearchForm from './SearchForm';

const storyMeta = {
  title: 'component/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  args: {
    initValue: 'products',
    type: 'title',
  },
};

export default storyMeta;

export const Default = {};
Default.storyName = '상품검색';

export const Users = {
  args: {
    initValue: 'users',
    type: 'nickName',
  },
};

Users.storyName = '유저검색';
