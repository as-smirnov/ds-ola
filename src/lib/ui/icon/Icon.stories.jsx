import React from 'react';
import { Icon } from './icon';
import { icons } from './icons-set';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    // 1. Делаем удобный выпадающий список для выбора имени иконки
    name: {
      control: { type: 'select' },
      // Автоматически вытаскиваем все ключи (имена) из твоего base-набора в icons-set
      options: Object.keys(icons.base),
    },
    // 2. Делаем выпадающий список для наших новых размеров сеток
    size: {
      control: { type: 'select' },
      options: ['16.Base', '16.Small'],
    },
  },
};

const Template = (args) => <Icon {...args} />;

// 3. Создаем главную витрину, которая откроется в Storybook
export const Default = Template.bind({});
Default.args = {
  name: 'arrowRight', // Имя иконки по умолчанию
  size: '16.Base',    // Наш новый размер сетки по умолчанию
};
