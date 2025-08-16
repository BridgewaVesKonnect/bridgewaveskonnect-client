import {
   Autocomplete as MuiAutocomplete,
   AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { forwardRef } from "react";

interface AutocompleteProps<
   T,
   Multiple extends boolean | undefined = false,
   DisableClearable extends boolean | undefined = false,
   FreeSolo extends boolean | undefined = false,
> extends MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
   sx?: SxProps<Theme>;
   style?: React.CSSProperties;
   muiProps?: MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;
}

const AutoComplete = forwardRef(function AutoComplete<
   T,
   Multiple extends boolean | undefined = false,
   DisableClearable extends boolean | undefined = false,
   FreeSolo extends boolean | undefined = false,
>(
   props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
   ref: React.Ref<HTMLDivElement>,
) {
   const { muiProps, ...rest } = props;

   return <MuiAutocomplete ref={ref} {...muiProps} {...rest} />;
});

AutoComplete.displayName = "Alert";

export default AutoComplete;
