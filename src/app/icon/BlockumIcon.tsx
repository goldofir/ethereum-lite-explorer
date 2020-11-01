import * as React from "react";
import { SvgIcon, ISvgIconProps } from "@alethio/ui/lib/util/react/SvgIcon";

export interface IBlockumIconProps extends ISvgIconProps {
}

export class BlockumIcon extends React.PureComponent<IBlockumIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path fill="currentColor"
                        // tslint:disable-next-line:max-line-length
                        d="M0,10.21c.07-.33.12-.66.21-1A7.34,7.34,0,0,1,3.72,4.72c.9-.53,1.81-1,2.72-1.55l.11,0,2.6,4.42-.35.2c-.5.28-1,.55-1.51.86a1.93,1.93,0,0,0-1,2,1.94,1.94,0,0,0,.24.6C7.35,12.54,8.2,13.92,9,15.34a1.86,1.86,0,0,0,2.36.76c.45-.2.88-.47,1.31-.71l.83-.46,2.59,4.42-.21.13-2.43,1.37a7.94,7.94,0,0,1-3.3,1.08s-.05,0-.08,0H8.86l-.49-.08a5.52,5.52,0,0,1-4.23-2.72C3,17.24,1.88,15.32.77,13.39A9.34,9.34,0,0,1,.16,12,4.52,4.52,0,0,1,0,11.24Z"
                    />
                    <path fill="currentColor"
                        // tslint:disable-next-line:max-line-length
                        d="M23.5,11.8c-.07.31-.12.62-.2.93A7.22,7.22,0,0,1,20.1,17c-1,.64-2.07,1.21-3.14,1.83l-2.6-4.44,1.1-.62c.3-.18.62-.34.9-.54a1.77,1.77,0,0,0,.57-2.49c-.79-1.36-1.63-2.7-2.37-4.08A2,2,0,0,0,11.88,6c-.55.3-1.09.61-1.63.92L10,7,7.44,2.62l.17-.11L10.24,1A7.46,7.46,0,0,1,14.3,0a5.75,5.75,0,0,1,5.12,2.91c1.06,1.85,2.16,3.69,3.25,5.54a5.43,5.43,0,0,1,.8,2.26l0,0Z"
                    />
                    <path fill="currentColor"
                        // tslint:disable-next-line:max-line-length
                          d="M15.53,11.63a1.25,1.25,0,0,1-.64,1.16c-1.07.62-2.15,1.23-3.23,1.84A1.23,1.23,0,0,1,10,14.21C9.3,13.13,8.67,12.05,8,11a1.2,1.2,0,0,1,.51-1.68l3.19-1.81a1.24,1.24,0,0,1,1.73.42C14.11,9,14.74,10,15.36,11.12A2.31,2.31,0,0,1,15.53,11.63Z"
                    />
                </g>
            </SvgIcon>
        );
    }
}
