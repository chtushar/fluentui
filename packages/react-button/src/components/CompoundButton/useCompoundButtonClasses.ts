import { makeVariantClasses, Theme } from '@fluentui/react-theme-provider';
import { CompoundButtonState } from './CompoundButton.types';
import { useButtonClasses } from '../Button/useButtonClasses';

const GlobalClassNames = {
  root: 'ms-CompoundButton',
  contentContainer: 'ms-CompoundButton-contentContainer',
  secondaryContent: 'ms-CompoundButton-secondaryContent',
};

const useCompoundButtonBaseClasses = makeVariantClasses<CompoundButtonState>({
  name: 'CompoundButton',
  prefix: '--button',

  styles: {
    root: [
      GlobalClassNames.root,
      {
        alignItems: 'flex-start',
      },
    ],

    contentContainer: [
      GlobalClassNames.contentContainer,
      {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
      },
    ],

    secondaryContent: [
      GlobalClassNames.secondaryContent,
      {
        color: 'var(--button-secondaryContentColor, var(--button-contentColor))',
        fontSize: 'var(--button-secondaryContentFontSize)',
        fontWeight: 'var(--button-secondaryContentFontWeight)',
        lineHeight: '100%',
        marginTop: 'var(--button-secondaryContentGap)',

        [`.${GlobalClassNames.root}:hover &`]: {
          color: 'var(--button-hovered-secondaryContentColor, var(--button-secondaryContentColor))',
        },

        [`.${GlobalClassNames.root}:active &`]: {
          color:
            'var(--button-pressed-secondaryContentColor, ' +
            'var(--button-hovered-secondaryContentColor, ' +
            'var(--button-secondaryContentColor)))',
        },

        [`.${GlobalClassNames.root}[aria-disabled="true"] &`]: {
          color: 'var(--button-disabled-secondaryContentColor, var(--button-disabled-contentColor))',
        },
      },
    ],
  },

  variants: (theme: Theme) => {
    const { palette, semanticColors } = theme;

    return {
      root: {
        height: 'auto',
        maxWidth: '280px',
        minWidth: '72px',
        paddingBottom: '16px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '16px',
        iconSize: '28px',
        secondaryContentColor: palette.neutralSecondary,
        secondaryContentGap: '4px',
        secondaryContentFontWeight: 'normal',

        hovered: {
          secondaryContentColor: palette.neutralDark,
        },

        pressed: {
          secondaryContentColor: semanticColors.buttonTextPressed,
        },

        disabled: {
          secondaryContentColor: 'var(--button-disabled-contentColor)',
        },
      },

      iconOnly: {
        minHeight: 'var(--button-size-regular)',
        width: 'var(--button-minHeight)',
        minWidth: 0,
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },

      primary: {
        secondaryContentColor: 'var(--color-brand-secondaryContentColor)',

        focused: {
          secondaryContentColor: 'var(--color-brand-focused-secondaryContentColor)',
        },

        hovered: {
          secondaryContentColor: 'var(--color-brand-hovered-secondaryContentColor)',
        },

        pressed: {
          secondaryContentColor: 'var(--color-brand-pressed-secondaryContentColor)',
        },
      },
    };
  },
});

export const useCompoundButtonClasses = (state: CompoundButtonState) => {
  useButtonClasses(state);
  useCompoundButtonBaseClasses(state);
};