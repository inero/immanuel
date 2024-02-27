import React from "react";
import {
    Label,
    Icon,
    Container
} from 'semantic-ui-react';
import './Footer.css';

export const Footer = () => (
    <footer className="footer">
        <Container textAlign='center'>
            <Label as='a'>
                <Icon name='stack overflow' /> 
                <a target="_blank" href="https://stackoverflow.com/users/5463018/immanuel-kirubaharan" data-original-title="Stack overflow" class="Stack overflow">Stack Overflow</a>
            </Label>
            <Label as='a'>
                <Icon name='facebook square' /> 
                <a target="_blank" href="https://www.facebook.com/immanuel.kirubaharan" data-original-title="facebook" class="facebook">facebook</a>
            </Label>
            <Label as='a'>
                <Icon name='linkedin' /> 
                <a target="_blank" href="https://in.linkedin.com/in/immanuel-kirubaharan-b1934ab3" data-original-title="linkedin" class="linkedin">linkedin</a>
            </Label>
            <Label as='a'>
                <Icon name='twitter square' /> 
                <a target="_blank" href="https://twitter.com/yes_imman" data-original-title="twitter" class="twitter">twitter</a>
            </Label>
            <Label as='a'>
                <Icon name='youtube' /> 
                <a target="_blank" href="https://www.youtube.com/channel/UC4AOvGIPwROyz0MoW_saIag?app=desktop" data-original-title="youtube" class="youtube">youtube</a>
            </Label>
        </Container>
    </footer>
);