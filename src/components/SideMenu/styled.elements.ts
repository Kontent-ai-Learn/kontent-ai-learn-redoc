import * as classnames from 'classnames';
import { darken } from 'polished';

import { deprecatedCss, ShelfIcon } from '../../common-elements';
import styled, { css } from '../../styled-components';

export const OperationBadge = styled.span.attrs((props: { type: string }) => ({
  className: `operation-type ${props.type}`,
})) <{ type: string }>`
  width: 32px;
  display: inline-block;
  background-color: #333;
  background-repeat: no-repeat;
  font-size:10px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  line-height: 1.675em;
  text-decoration: none;
  margin: 0 .5em 0 0; 

  &.get {
    background-color: ${props => props.theme.colors.http.get};
  }

  &.post {
    background-color: ${props => props.theme.colors.http.post};
  }

  &.put {
    background-color: ${props => props.theme.colors.http.put};
  }

  &.options {
    background-color: ${props => props.theme.colors.http.options};
  }

  &.patch {
    background-color: ${props => props.theme.colors.http.patch};
  }

  &.delete {
    background-color: ${props => props.theme.colors.http.delete};
  }

  &.basic {
    background-color: ${props => props.theme.colors.http.basic};
  }

  &.link {
    background-color: ${props => props.theme.colors.http.link};
  }

  &.head {
    background-color: ${props => props.theme.colors.http.head};
  }
`;

export const MenuItemUl = styled.ul<{ expanded: boolean }>`
  margin: 0;
  padding: 0;

  & & {
    font-size: 1em;
  }

  ${props => (props.expanded ? '' : 'display: none;')};
`;

export const MenuItemLi = styled.li<{ depth: number }>`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${props => (props.depth === 0 ? 'margin-top: 15px' : '')};
`;

export const menuItemDepth = {
  0: css`
    opacity: 0.7;
    text-transform: ${({ theme }) => theme.menu.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
    color: ${props => props.theme.menu.textColor};
  `,
  1: css`
    font-size: 1em;
    text-transform: ${({ theme }) => theme.menu.level1Items.textTransform};
    &:hover {
      color: ${props => props.theme.colors.primary.main};
    }
  `,
  2: css`
    color: ${props => props.theme.menu.textColor};
  `,
};

export interface MenuItemLabelType {
  depth: number;
  active: boolean;
  deprecated?: boolean;
  type?: string;
}

export const MenuItemLabel = styled.label.attrs((props: MenuItemLabelType) => ({
  role: 'menuitem',
  className: classnames('-depth' + props.depth, {
    active: props.active,
  }),
})) <MenuItemLabelType>`
  cursor: pointer;
  color: #6B7C85;
  font-weight: ${props => (props.active ? '700' : '400')};
  margin: 0;
  padding: 0.5em 0 0.5em 1.5em;
  line-height: 1.25em;
  display: block;
  ${({ depth, type, theme }) =>
    (type === 'section' && depth > 1 && 'padding-left: ' + theme.spacing.unit * 8 + 'px;') || ''}
  font-family: ${props => props.theme.typography.headings.fontFamily};
  ${props => menuItemDepth[props.depth]};
  background-color: transparent;

  ${props => (props.deprecated && deprecatedCss) || ''};

  &:hover {
    [class*=MenuItemTitle] {
      color: ${props => props.theme.typography.links.color};
      text-decoration: underline;
    }

    [class*=OperationBadge] {
      text-decoration: none;
    }
  }

  &.-depth1 {
    font-size: 1.125em;
  }

  &.-depth2 {
    padding: 0.5em 0 0.5em 3.5em;
  }

  &.-depth3 {
    padding: 0.5em 0 0.5em 5em;
  }

  ${ShelfIcon} {
    height: ${({ theme }) => theme.menu.arrow.size};
    width: ${({ theme }) => theme.menu.arrow.size};
    polygon {
      fill: ${({ theme }) => theme.menu.arrow.color};
    }
  }
`;

export const MenuItemTitle = styled.span<{ width?: string }>`
  display: inline-block;
  vertical-align: middle;
  width: ${props => (props.width ? props.width : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RedocAttribution = styled.div`
  ${({ theme }) => `
  font-size: 0.8em;
  margin-top: ${theme.spacing.unit * 2}px;
  padding: 0 ${theme.spacing.unit * 4}px;
  text-align: left;

  opacity: 0.7;

  a,
  a:visited,
  a:hover {
    color: ${theme.menu.textColor} !important;
    border-top: 1px solid ${darken(0.1, theme.menu.backgroundColor)};
    padding: ${theme.spacing.unit}px 0;
    display: block;
  }
`};
`;
