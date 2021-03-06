import * as React from 'react';
import { Facepile } from './Facepile';
import { IButtonProps } from '../Button/index';
import { PersonaInitialsColor } from '../Persona/index';

export interface IFacepileProps extends React.Props<Facepile> {
  /**
   * Array of IPersonaProps that define each Persona. Note that the size
   * is fixed at PersonaSize.extraSmall regardless of what is specified.
   */
  personas: IFacepilePersona[];

  /** Maximum number of personas to show */
  maxDisplayablePersonas?: number;

  /** Show add person button */
  showAddButton?: boolean;

  /** Button properties for the add face button */
  addButtonProps?: IButtonProps;

  /**
   * @deprecated
   * Deprecated at v0.70, to be removed at >= v1.0.0. User overflowButtonProps instead;
   * Button properties for the chevron button
   */
  chevronButtonProps?: IButtonProps;

  /** Properties for the overflow icon */
  overflowButtonProps?: IButtonProps;

  /** Type of overflow icon to use */
  overflowButtonType?: OverflowButtonType;
}

export interface IFacepilePersona extends React.HTMLProps<HTMLButtonElement | HTMLDivElement> {
  /**
   * Name of the person.
   */
  personaName?: string;

  /**
   * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.
   */
  imageUrl?: string;

  /**
   * The user's initials to display in the image area when there is no image.
   */
  imageInitials?: string;

  /**
   * The background color when the user's initials are displayed.
   * @defaultvalue PersonaInitialsColor.blue
   */
  initialsColor?: PersonaInitialsColor;

  /**
   * If provided, persona will be rendered with cursor:pointer and the handler will be
   * called on click.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;

  /**
   * If provided, the handler will be called on mouse move.
   */
  onMouseMove?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;

  /**
   * If provided, the handler will be called when mouse moves out of the component.
   */
  onMouseOut?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;

  /**
   * Extra data - not used directly but can be handy for passing additional data to custom event
   * handlers.
   */
  data?: any;
}

export enum OverflowButtonType {
  /** No overflow */
  none,
  /** +1 overflow icon */
  descriptive,
  /** More overflow icon */
  more,
  /** Chevron overflow icon */
  downArrow
}