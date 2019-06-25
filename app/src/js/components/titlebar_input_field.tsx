import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        formControl: {
            margin: theme.spacing(1)
        }
    })
);

interface TextMaskCustomProps {
    /** inputRef */
    inputRef: (ref: HTMLInputElement | null) => void;
}

/** TextMaskCustom */
function TextMaskCustom(props: TextMaskCustomProps) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, '/', /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired
} as any;

interface State {
    /** textmask */
    textmask: string;
}

/** FormattedInputs */
export function FormattedInputs() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        textmask: ' / '
    });

    const handleChange = (name: keyof State) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [name]: event.target.value
        });
    };

    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='formatted-text-mask-input'>
                    react-text-mask</InputLabel>
                <Input
                    value={values.textmask}
                    onChange={handleChange('textmask')}
                    id='formatted-text-mask-input'
                    inputComponent={TextMaskCustom as any}
                />
            </FormControl>
        </div>
    );
}
