import React, { Component } from 'react';
import { Container } from 'components';
import { Application } from 'components';

export class Demo extends Component
{
    render()
    {
        return (
            <Application>
                <Application.Header layout="border">
                    <Container width="208px">Logo</Container>
                    <Container region="center">Menu</Container>
                </Application.Header>
                <Application.Container>
                    <Application.Navigation>
                        Navigation
                    </Application.Navigation>
                    <Application.Content>
                        <div style={{minHeight: '1000px', backgroundColor: 'cornflowerblue'}}>
                            Very long div
                        </div>
                    </Application.Content>
                    <Application.Aside>
                        Aside
                    </Application.Aside>
                </Application.Container>
                <Application.Footer>
                    Footer
                </Application.Footer>
            </Application>
        );
    }
}
