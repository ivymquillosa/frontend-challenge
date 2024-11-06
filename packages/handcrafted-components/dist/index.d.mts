import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import React__default, { FC, RefAttributes, HtmlHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { SwitchProps } from 'react-aria-components';

declare const avatarVariants: (props?: ({
    color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "default" | "active" | "light" | "dark" | "inherit" | null | undefined;
    size?: "sm" | "base" | "lg" | "xl" | null | undefined;
    radius?: "none" | "soft" | "round" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IAvatarProps extends VariantProps<typeof avatarVariants> {
    className?: string;
    name: string;
    src?: React__default.ImgHTMLAttributes<HTMLImageElement>['src'];
}
declare const Avatar: React__default.ForwardRefExoticComponent<IAvatarProps & React__default.RefAttributes<HTMLDivElement>>;

type commonTypes = {
    variant?: 'flat' | 'solid' | 'outlined' | 'soft';
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'default' | 'active' | 'light' | 'dark';
    size?: 'sm' | 'base' | 'lg' | 'xl';
    radius?: 'none' | 'soft' | 'round';
};

declare const badgeVariants: (props?: ({
    size?: "sm" | "base" | "lg" | "xl" | null | undefined;
    radius?: "none" | "soft" | "round" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IBadgeProps extends VariantProps<typeof badgeVariants> {
    className?: string;
    variant?: commonTypes['variant'];
    color?: commonTypes['color'];
    label?: string;
    children?: React__default.HTMLAttributes<HTMLDivElement>['children'];
}
declare const Badge: React__default.ForwardRefExoticComponent<IBadgeProps & React__default.RefAttributes<HTMLDivElement>>;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: commonTypes['color'];
    variant?: commonTypes['variant'];
    size?: commonTypes['size'];
    radius?: commonTypes['radius'];
    loading?: boolean;
    scaleUp?: boolean;
    block?: boolean;
}
declare const Button: FC<IButtonProps & RefAttributes<HTMLButtonElement>>;

interface ICheckboxProps extends Omit<HtmlHTMLAttributes<HTMLInputElement>, 'className'> {
    color?: commonTypes['color'];
    size?: commonTypes['size'];
    radius?: commonTypes['radius'];
    label?: string;
    className?: string;
}
declare const Checkbox: React$1.ForwardRefExoticComponent<ICheckboxProps & React$1.RefAttributes<HTMLInputElement>>;

interface IImageProps extends React__default.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    radius?: commonTypes['radius'];
    size?: commonTypes['size'];
}
declare const Image: React__default.ForwardRefExoticComponent<IImageProps & React__default.RefAttributes<HTMLDivElement>>;

interface IInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: commonTypes['variant'];
    color?: commonTypes['color'];
    size?: commonTypes['size'];
    radius?: commonTypes['radius'];
    label?: string;
    icon?: any;
}
declare const InputFields: React__default.ForwardRefExoticComponent<IInputProps & React__default.RefAttributes<HTMLDivElement>>;

interface IProgressProps extends React__default.HTMLAttributes<HTMLDivElement> {
    color?: commonTypes['color'];
    size?: commonTypes['size'];
    type?: 'line' | 'circular' | 'half-circle';
    showValue?: boolean;
    value: number;
    range?: any;
}
declare const ProgressBar: React__default.ForwardRefExoticComponent<IProgressProps & React__default.RefAttributes<HTMLDivElement>>;

interface IRadioProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'className'> {
    color?: commonTypes['color'];
    size?: commonTypes['size'];
    label?: string;
    className?: string;
}
declare const Radio: React$1.ForwardRefExoticComponent<IRadioProps & React$1.RefAttributes<HTMLInputElement>>;

declare const spinnerVariants: (props?: ({
    color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "default" | "active" | "light" | "dark" | "inherit" | null | undefined;
    size?: "sm" | "base" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ISpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}
declare const Spinner: FC<ISpinnerProps & RefAttributes<HTMLDivElement>>;

declare const switchVariants: (props?: ({
    color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "default" | "active" | "light" | "dark" | "inherit" | null | undefined;
    size?: "sm" | "base" | "lg" | "xl" | null | undefined;
    switchColor?: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "default" | "active" | "light" | "dark" | "inherit" | null | undefined;
    circleSize?: "sm" | "base" | "lg" | "xl" | null | undefined;
    textSize?: "sm" | "base" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ISwitchProps extends Omit<SwitchProps, 'children'>, Omit<VariantProps<typeof switchVariants>, 'switchColor' | 'circleSize' | 'textSize'> {
    children?: React.ReactNode;
}
declare const Switch: React$1.ForwardRefExoticComponent<ISwitchProps & React$1.RefAttributes<HTMLLabelElement>>;

interface ITextareaProps extends Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    variant?: commonTypes['variant'];
    color?: commonTypes['color'];
    size?: commonTypes['size'];
    radius?: commonTypes['radius'];
    label?: string;
    icon?: any;
}
declare const Textarea: React__default.ForwardRefExoticComponent<ITextareaProps & React__default.RefAttributes<HTMLDivElement>>;

export { Avatar, Badge, Button, Checkbox, Image, InputFields, ProgressBar, Radio, Spinner, Switch, Textarea };
