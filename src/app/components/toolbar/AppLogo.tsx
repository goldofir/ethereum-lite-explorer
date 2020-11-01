import * as React from "react";
import { IconButton } from "@alethio/ui/lib/control/IconButton";
import { BlockumIcon } from "../../icon/BlockumIcon";

export interface IToolbarLogoProps {

}

export class AppLogo extends React.Component<IToolbarLogoProps> {
    render() {
        return (
            <IconButton Icon={BlockumIcon} color={theme => theme.colors.toolbarAlethioIconHover} />
        );
    }
}
