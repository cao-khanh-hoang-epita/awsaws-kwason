/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceUpdateFormInputValues = {
    name?: string;
    description?: string;
    doctor?: string;
    like?: number;
};
export declare type ServiceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    doctor?: ValidationFunction<string>;
    like?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceUpdateFormOverridesProps = {
    ServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    doctor?: PrimitiveOverrideProps<TextFieldProps>;
    like?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    service?: any;
    onSubmit?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onSuccess?: (fields: ServiceUpdateFormInputValues) => void;
    onError?: (fields: ServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onValidate?: ServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceUpdateForm(props: ServiceUpdateFormProps): React.ReactElement;
