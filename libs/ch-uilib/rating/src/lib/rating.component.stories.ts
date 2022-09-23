import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RatingComponent } from './rating.component';

export default {
  title: 'RatingComponent',
  component: RatingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<RatingComponent>;

const Template: Story<RatingComponent> = (args: RatingComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  rating: 3,
};
