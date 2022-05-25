import { Container } from './style';

export function Header({black}){
    return(
        <Container style={ black ? {background: "#141414"} : null }>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NewNetflixLogo.png/120px-NewNetflixLogo.png" alt="Logo Netflix" />
                </a>
            </div>

            <div className="header-user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Logo usuário" />
                </a>
            </div>
        </Container>
    )
}