import { IChildren } from 'lib/interfaces/Children';

export interface IProperties<T> extends IChildren {
	className?: string;
	rest?: React.AllHTMLAttributes<T>;
}
