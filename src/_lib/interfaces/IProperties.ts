import { Children } from 'lib/interfaces/IChildren';

export interface Properties<T> extends Children {
	className?: string;
	rest?: React.AllHTMLAttributes<T>;
}
