export const createStyleGetter = (props, defaultStyle) => (field) => {
    let style = defaultStyle;
    if(props.style)
        style = props.style;

    if(field)
        return style[field];
    else
        return style;
}