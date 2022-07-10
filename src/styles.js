// Define default theme properties
const colors = {
  primary: '#21C6E1',
  bgComment: 'rgba(0,0,0, .5)',
  selectedPoint: 'red',
  transparent: 'rgba(0,0,0,0)',
  bgDark: '#e9e9e9'
};

// Define style
const style = {
  Gallary: {
    main: {
      width: '40vw',
      height: '10vh',
      display: 'flex',
      background: colors.bgDark,
      padding: '20px',
      borderRadius: '5px',
      margin: '15px auto'
    },
    images: { display: 'flex', overflowX: 'scroll' }
  },
  SingleImage: {
    button: {
      outline: 0,
      border: 0
    },
    name: {
      position: 'absolute',
      width: '15vw',
      textAlign: 'center',
      color: 'white',
      background: colors.bgComment,
      padding: 3
    }
  },

  SelectedImage: {
    main: {},
    imageBody: { width: '40vw'},
    commentDiv: { position: 'absolute' },
    imageWrapper: {
      width: '40vw',
      background: colors.bgDark,
      padding: '5px'
    },
    settingsWrapper: {
      display: 'flex',
      width: '40vw',
      padding: '5px',
      justifyContent: 'center'
    }
  },
  ImageHeader: {
    main: {
      height: '5vh',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      margin: '5px'
    },
    name: { color: 'white', marginTop: '5px', marginRight: '5px' },
    deleteButton: { background: 'red', color: 'white' },
    editButton: {},
    cancelButton: {}
  },
  ImagePreview: {
    main: {},
    commentDiv: { position: 'absolute' },
    mainImage: { maxWidth: '95vw' }
  },
  PointComments: {
    main: {
      width: '190px',
      marginTop: '0px',
      background: colors.bgComment,
      textAlign: 'center',
      borderRadius: '3px',
      marginLeft: '15px',
      padding: '5px 5px 10px 5px'
    },
    header: { position: 'relative', width: '100%' },
    headerSpan: { fontSize: '1em', color: colors.primary },
    inputTextarea: { marginTop: '0px', height: '50px', width: '87%', padding: '10px', resize: 'none' },
    inputTextbox: { marginTop: '4px', height: '10px', width: '87%', padding: '10px' },
    buttons: {  display: 'flex', justifyContent: 'space-between', padding: '8px 0px 0px 0px'},
    commentComponent: {
      textAlign: 'justify',
      fontSize: '.8em',
      color: 'white',
      margin: '3px'
    },
    commentsWrapper: { maxHeight: '30vh', overflowY: 'auto' },
    commentBody: { display: 'flex', marginTop: '2px' },
    commentUser: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginRight: '5px'
    },
    commentTime: { color: 'rgba(255,255,255,.60)' },
    commentDelete: {
      color: 'red',
      textAlign: 'right',
      flex: '1'
    },
    commentSpan: { overflowX: 'scroll', wordBreak: 'break-all' }
  },
  AllComments: {
    main: {
      width: '20vw',
      top: '40vh',
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      background: colors.bgComment,
      textAlign: 'center',
      borderRadius: '5px',
      zIndex: 1,
      padding: '3px',
      right: '0px',
      opacity: 1,
      transition: 'all .8s ease'
    },
    mainHidden: {
      width: '20vw',
      top: '40vh',
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      background: colors.bgComment,
      textAlign: 'center',
      borderRadius: '5px',
      zIndex: 1,
      padding: '3px',
      right: '0px',
      opacity: 0,
      transition: 'all .8s ease'
    },
    header: { fontSize: '1.5em', color: colors.primary },
    commentComponent: {
      color: 'white',
      textAlign: 'justify',
      fontSize: '15px',
      margin: '10px 15px 10px 15px',
      borderBottom: '1px solid #ccc',
      paddingBottom: '15px'
    },
    selectedCommentComponent: {
      color: 'black',
      background: 'white',
      textAlign: 'justify',
      fontSize: '15px',
      margin: '10px 15px 10px 15px',
      borderBottom: '1px solid #ccc',
      paddingBottom: '15px'
    },
    commentBody: { display: 'flex', marginTop: '2px' },
    commentUser: {
      fontWeight: 'bold',
      marginRight: '5px',
      fontStyle: 'italic'
    },
    commentTime: { color: 'rgba(255,255,255,.60)', fontSize: '10px', margin: '3px 0px' },
    commentSpan: { overflowX: 'scroll', wordBreak: 'break-all' }
  }
};

// Export style
export default style;

// Export colors
export { colors };
