import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StarComponent } from './star.component';

export default {
  title: 'StarComponent',
  component: StarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<StarComponent>;

const Template: Story<StarComponent> = (args: StarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  stars: [1, 2, 3],
};
