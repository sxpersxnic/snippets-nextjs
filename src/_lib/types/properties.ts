import { Button } from 'ui/components/button';
import { type ComponentProps } from 'react';

export type ButtonProps = ComponentProps<typeof Button> & {
	pendingText?: string;
};
