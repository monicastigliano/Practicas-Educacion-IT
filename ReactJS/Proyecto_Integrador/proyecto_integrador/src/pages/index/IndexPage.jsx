import { ItemList, NavBar, SearchBox } from '../../components';

export default function IndexPage()
{
    return (
        <div>
            <NavBar />
            <main>
                <SearchBox />
                <ItemList />
            </main>
        </div>
    );
}