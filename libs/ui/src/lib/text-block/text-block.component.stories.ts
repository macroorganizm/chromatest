import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextBlockComponent } from './text-block.component';

export default {
  title: 'TextBlockComponent',
  component: TextBlockComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextBlockComponent>;

const Template: Story<TextBlockComponent> = (args: TextBlockComponent) => ({
  template: `
    <olchromatic-text-block [bordered]="bordered">
      <div text-block-header>
        <h2>Some header</h2>
      </div>
      <p style="color: blue">Content Start changed</p>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p style="color: blue">Content end</p>
      <div text-block-footer>
        <p>Some footer</p>
      </div>
    </olchromatic-text-block>
`,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  bordered: true,
};
