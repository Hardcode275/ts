

function saludar({name, age}: {name: string, age: number}): number { 

    console.log(`Hola ${name}, tienes ${age} años`);
    return age;
}


const sayHiFromFunction = (fn: (name: string) => void) => {
    fn("miguel");
}

sayHiFromFunction((name: string) => {
    console.log(`Hola ${name}`);
    })

    const avengers = [ "Thor", "Ironman", "Spiderman", "Capitan America", "Hulk"]

    avengers.forEach(function(avenger) {
        console.log(avenger.toUpperCase())
    })
     
    // $ sirve para evaluar el string que esta dentro de las llaves.
    type HeroId = `${string}-${string}-${string}-${string}-${string}`; 
    type HeroPowerScale = `local` | `planetary` | `galactic` | `universal` | `multiversal` | `omnipotent`; 
        
    const enableAnimationDuration: boolean | number = 200

    type HeroInput = {
        name: string, 
        age: number,
    }
    type Hero = {
        name: string;
        age: number
        isactive?: boolean;
        readonly id?: HeroId;
        powerScale?: HeroPowerScale;

    }


    let hero: Hero = {
        name: "Spiderman",
        age: 30,
        
    }


    function createHero(hero: Hero): Hero {
        const { name, age } = hero;
        return { id: crypto.randomUUID(),  name, age, isactive: true};
    }
    

    const thor = createHero({name: "Thor", age: 1500});
    thor.powerScale = `planetary`;
    console.log(thor.isactive);

    thor.id?.toString()

    //template union types, no es mucho para validar datos, pero si para crear tipos de datos.

type HexadecimalColor = `#${string}`

const color : HexadecimalColor = `#0033ff`;
const color2  : HexadecimalColor = `#0033ff`;


// typescript no es para validaciones de usuario, necesita bibliotecas.

//type indexing 

type HeroProperties = {
    isactive: boolean,
    address: {
        city: string,
        country: string,
    }
}

const addressHero: HeroProperties[`address`] = {
    city: `New York`,
    country: `USA`
}

//types from values, crear un tipo a travez de una constasnte 

const addrss = {
    city: `New York`,
    country: `USA`
}

type addrss = typeof addrss;

const addressTwitch: addrss = {
    city: `New York`,
    country: `USA`
}

function createAddress() {
    return {
        city: `New York`,
        country: `USA`
    }
}

// el returntype devuelve el tipo de funcion de createaddress y se guarda en Address
type address = ReturnType<typeof createAddress>;

//arrays 
// entonces el : string[] sirva para que pueda haber un arrays de strings sino lo tiene se manda vacio y no se puede colocar nada mas.
const languages: string[] = [] // que siempre este vacio y no se pueda modificar si solo esta de esta forma const languages = []
// OJO  solo se puede string.
languages.push(`javascript`);
languages.push(`typescript`);


//si deseamos que sea de ambos osea numeros y string se hace de esta forma. 

const languajes: (string | number)[] = [];

languajes.push(`javascript`);
languajes.push(2);

//sirve para poder dar los datos al array y cuales se usaran.

type CellValue = `x` | `o` | ``;

//esta sirve para poder colocar los valores de la matriz y que no se pueda modificar.
type GameBord = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

//esta sirve para poder hacer el array de la matriz.
const gameBord: GameBord = [
    [`x`, `o`, `x`],
    [`o`, `x`, `o`],
    [`x`, `o`, `x`]
]

//tuples
type RGB =  [number, number, number];
const black: RGB = [0, 0, 0];
const rgb: RGB = [255, 255, 0] ;

black.push(4); //hay un problema porque solo existen 3 parametros, para evitar eso solo se utiliza el redondly
// asi de esta forma type RGB = readonly [number, number, number];



type Color  = `#${string}` // template union types, asegura que tenga siempre la almuadilla  o el numeral adelante, sirve para eitar errores porque sino no los detecta.

const HexadecimalColor: Color = `#0033ff`;

const blackHexadecimal: Color = `#000000`;



//javascript se utiliza de esta forma para evitar errores de escritura si se utiliza mas adelante la parte de errores 
const ERROR_TYPES = {
    error: "error",
    warning: "warning",
    success: "success",
}
function mostrarMensaje (tipoDeError){
    if(tipoDeError === ERROR_TYPES.error){
        return "Ha ocurrido un error";
    }
    if(tipoDeError === ERROR_TYPES.warning){
        return "Tenga cuidado";
    }
    if(tipoDeError === ERROR_TYPES.success){
        return "Todo ha ido bien";
    }
    return "No se ha encontrado el tipo de error";
}

//en typescript lo mejor es utilizar los enums 
//tienen que ser datos finitos, los dias de la semana, los meses, pero no pueden ser 280, no pueden ser dinamicos. 
// se puede utilizar el const en el enum para no generar codigo de mas.
// el enum cuando se crea una biblioteca o una libreria o un componente que quieras que se consuma fuera de la aplicacion, se utiliza el enum.
//normalmente siempre el const pero si este se consume afuera mejor el num.
enum ERROR_TYPES1 {
    error = "error",
    warning = "warning",
    success = "success",
}



function mostrarMensaje1 (tipoDeError: ERROR_TYPES1){
    if(tipoDeError === ERROR_TYPES1.error){
        return "Ha ocurrido un error";
    }
    if(tipoDeError === ERROR_TYPES1.warning){
        return "Tenga cuidado";
    }
    if(tipoDeError === ERROR_TYPES1.success){
        return "Todo ha ido bien";
    }
    return "No se ha encontrado el tipo de error";
}

const canvas = document.getElementById("canvas") ; // se podria utilizar aqui el as htmlcanvaselement se utiliza el htmlcanvaselement para que sea mas especifico, sino lo tomara como general, nosotros obligamos a que se fie de nosotros.

// es inferencia typescript se da cuenta dentro del if 
//ya solo el canvas va a poder ser un HTMLCanvasElement
//ESTA ES LA MEJOR FORMA DE ESCRITURA, 
if (canvas instanceof HTMLCanvasElement){ // <-- este da un checkeo de que si es un canvas, de la otra forma petaria.
    {// javacript esta ejecutando el codigo de la condición. 
    const ctx = canvas.getContext("2d");
}

}

//typeof ---> se utiliza para tipos de datos tal como es sstring, boolean, number.
//instanceof ---> se utiliza para saber si es una instancia de una clase o un objeto, tipo fechas, el date etc.

export type GithubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export enum DefaultBranch {
    Dev = "dev",
    Develop = "develop",
    Main = "main",
    Master = "master",
}

export enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    user_view_type:      Visibility;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}


const APY_URL = "https://api.github.com/search/repositories?q=javascript";

const response = await fetch(APY_URL); // para evitar el error del await se utiliza la extension mts
// se refiere a modulo. esto o sigue node js

if (!response.ok){
    
    throw new Error(`Request failed`);
}

//quicktype es una pagina web que te sirve para ver cada uno de los tipos, y te genera el codigo de typescript, sirve para las Apis. 

const data = await response.json() as GithubAPIResponse

data.items.map(repo => {
 return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url
 }
        
})

// en typescript se utiliza para validar los tipos de datos, es mentira que se escribe menos codigo.





