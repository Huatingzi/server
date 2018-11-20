export default ( str ) => {
    return encodeURIComponent( str ).replace( /[!'()*]/g, x => `%${x.charCodeAt( 0 ).toString( 16 ).toUpperCase()}` );
};
