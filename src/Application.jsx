import React, { Component } from 'react';
import { Container } from './Container';

export class Application extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({orientation: 'vertical', layout: 'border', overflow: false}, this.props);

        return (
            <Container id="react-app" {...props}>
                {this.props.children}
            </Container>
        );
    }
}

export class ApplicationHeader extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({id: 'main-header', region: 'north', overflow: false}, this.props);

        return (
            <Container {...props}>
                {this.props.children}
            </Container>
        );
    }
}

export class ApplicationContainer extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({id: 'main-container', layout:"border", region:"center", overflow: false}, this.props);

        return (
            <Container {...props}>
                {this.props.children}
            </Container>
        );
    }
}

export class ApplicationContent extends Component
{
    render()
    {
        let props = Object.assign({id: 'main-content', region: 'center', layout: 'border', overflow: false}, this.props);

        return (
            <Container {...props}>
                {this.props.children}
            </Container>
        );
    }
}

export class ApplicationNavigation extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({id: 'main-nav', overflow: false}, this.props);

        return <Container {...props}>{this.props.children}</Container>;
    }
}

export class ApplicationAside extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({id: 'main-aside', overflow: false}, this.props);

        return (
            <Container {...props}>
                {this.props.children}
            </Container>
        );
    }
}

export class ApplicationFooter extends Component
{
    render()
    {
        // We can safely set the overflow to false because for full screen apps we don't
        // want the content overflow the main wrappers
        let props = Object.assign({overflow: false}, this.props);

        return (
            <Container id="main-footer" {...props}>
                {this.props.children}
            </Container>
        );
    }
}

Application.Aside = ApplicationAside;
Application.Header = ApplicationHeader;
Application.Footer = ApplicationFooter;
Application.Content = ApplicationContent;
Application.Container = ApplicationContainer;
Application.Navigation = ApplicationNavigation;
