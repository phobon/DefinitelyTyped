import styled, { css } from "styled-components";
import { space, color, width, fontSize, alignItems, justifyContent, flexDirection, flex, flexWrap, borderRadius, fontWeight,
    SpaceProps, ColorProps, WidthProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, FlexWrapProps, FontSizeProps, BorderRadiusProps, FontWeightProps } from "styled-system";
import styledTs from "styled-components-ts";
import * as React from "react";

const truncate = (): any => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export type BoxProps =
    & SpaceProps
    & ColorProps
    & WidthProps
    & AlignItemsProps
    & JustifyContentProps
    & FlexDirectionProps
    & FlexWrapProps
    & FontSizeProps
    & FontWeightProps
    & BorderRadiusProps;

const Box = styledTs<BoxProps>(styled.div)`
    display: flex;
    flex: none;

    ${width}
    ${space}
    ${color}
    ${fontSize}
    ${fontWeight}

    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${flexWrap}

    ${borderRadius}
`;
