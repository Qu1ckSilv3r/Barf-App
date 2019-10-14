import * as React from "react";
import {CSSProperties} from "react";

interface Props {
    onClick?: (event?: MouseEvent) => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    style?: CSSProperties,
    className?: string,
    id?: string,
    href?: any,
    getRef?: (ref: HTMLElement | null) => void,
    reactToOtherClicks?: (clickedElement: HTMLElement) => void,
    target?: string,
    datatip?: string,
    datafor?: string,
    orgaId?: number
}

export default class TouchClick extends React.Component<Props, {}> {
    static nextGlobalClickId = 1;
    static clickListeners: any = {};
    _clickId: any = undefined;

    _startPos: any = undefined;
    _timeout: any = undefined;
    _r: any = undefined;


    constructor(props: Props) {
        super(props);
        if (TouchClick.nextGlobalClickId === 1) {
            window.addEventListener("click", (event) => {

                }
            );
        }
        this._clickId = TouchClick.nextGlobalClickId;
        ++TouchClick.nextGlobalClickId;
        this.handleCallbackSetup(props);
    }

    componentWillUnmount() {
        this.handleCallbackSetup({});
    }

    onTouchStart() {
        const event = arguments[arguments.length - 2];
        if (event) {
            this._startPos = {x: event.touches[0].clientX, y: event.touches[0].clientY};
            this._timeout = setTimeout(() => this._startPos = undefined, 400);
        }
    }

    onTouchEnd() {
        const event = arguments[arguments.length - 2];
        if (this._startPos && TouchClick.distanceSmallerAs(this._startPos, event, 10)) {
            event.preventDefault();
            this._startPos = undefined;
            clearTimeout(this._timeout);
            if (this.props.onClick) {
                (this.props.onClick.apply as any)(this, arguments);
            }
        }
    }

    onClick(event: any) {
        event.stopPropagation();
        if (this.props.onClick) {

            event.preventDefault();
            (this.props.onClick.apply as any)(this, arguments);
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.handleCallbackSetup(nextProps);
    }

    handleCallbackSetup = (props: Props) => {
        if (!!props.reactToOtherClicks && this._clickId) {
            TouchClick.clickListeners[this._clickId] = (clickedElement: HTMLElement) => props.reactToOtherClicks!(clickedElement)
        } else {
            if (!!TouchClick.clickListeners[this._clickId]) {
                delete TouchClick.clickListeners[this._clickId];
            }
        }
    }

    static distanceSmallerAs(startPos: any, endEvent: any, threshold: any) {
        const disX = startPos.x - endEvent.changedTouches.item(0).clientX,
            disY = startPos.y - endEvent.changedTouches.item(0).clientY;
        return Math.abs(disX) <= threshold && Math.abs(disY) <= threshold;
    }

    onRef = (ref: HTMLElement | null) => {
        this._r = ref;
        if (this.props.getRef) {
            this.props.getRef(ref);
        }
    }


    onMouseEnter(event: any) {
        if (this.props.onMouseEnter) {
            (this.props.onMouseEnter.apply as any)(this, arguments);
        }
    }

    onMouseLeave(event: any) {
        if (this.props.onMouseLeave) {
            (this.props.onMouseLeave.apply as any)(this, arguments);

        }
    }


    get clientWidth() {
        return this._r && this._r.clientWidth
    }

    render() {
        const defaultStyle = {
            textDecoration: "none",
            color: "none",
            cursor: this.props.onClick ? "pointer" : "cursor"
        };

        let style: any = defaultStyle;

        if (this.props.style) {
            style = {...defaultStyle, ...this.props.style}
        }

        const className = (this.props.className || "") + " touchclick ";

        if (this.props.href) {
            return (
                <a href={this.props.href} ref={r => this.onRef(r)} style={style} className={className}

                   onMouseEnter={this.onMouseEnter.bind(this)}
                   onMouseLeave={this.onMouseLeave.bind(this)}
                   data-tip={this.props.datatip}
                   data-for={this.props.datafor}

                   onClick={(e) => this.onClick(e)}

                   onTouchStart={this.onTouchStart.bind(this)}
                   onTouchEnd={this.onTouchEnd.bind(this)}
                   data-touchclickid={this._clickId}
                   id={this.props.id}
                   target={this.props.target || ""}
                >
                    {this.props.children}
                </a>

            );
        } else {
            return (
                <div style={style} className={className} ref={r => this.onRef(r)}
                     id={this.props.id}
                     data-tip={this.props.datatip}
                     data-for={this.props.datafor}

                     data-touchclickid={this._clickId}
                     onClick={this.onClick.bind(this)}
                     onMouseEnter={this.onMouseEnter.bind(this)}
                     onMouseLeave={this.onMouseLeave.bind(this)}

                     onTouchStart={this.onTouchStart.bind(this)}
                     onTouchEnd={this.onTouchEnd.bind(this)}>
                    {this.props.children}
                </div>
            );
        }

    }
}