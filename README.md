# react-layout
A simple set of components to create a full screen app layout

```jsx
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
            Main Content
        </Application.Content>
        <Application.Aside>
            Aside
        </Application.Aside>
    </Application.Container>
    <Application.Footer>
        Footer
    </Application.Footer>
</Application>
```
