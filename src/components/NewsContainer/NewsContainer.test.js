import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  let articles = [{
    id: 1,
    img: 'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
    headline: 'Man dies after getting infection linked to shellfish, North Carolina officials say',
    description: 'A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.',
    url: 'https://www.bnd.com/news/nation-world/national/article235549897.html'
  },
  {
    id: 2,
    img: 'https://thehill.com/sites/default/files/styles/thumb_small_article/public/flu_012918getty.jpg?itok=1dygJH3l',
    headline: 'Azar, other health officials press people to get flu shots early',
    description: 'U.S. health officials, including Health and Human Services Secretary Alex Azar, are encouraging Americans to get their flu shots early this year.',
    url: 'https://thehill.com/homenews/news/463354-azar-other-public-health-officials-press-people-to-get-flu-shots-early'
  }]

  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer
      news={articles}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});