# Html Webpack Plugin:
    <pre>
      Error: /Users/nym/Code/webpack-demo/src/template.html:72
      /******/  if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser"  );
                                ^
      Error: Automatic publicPath is not supported in this browser
      
      - template.html:72 
        /Users/nym/Code/webpack-demo/src/template.html:72:34
      
      - template.html:75 
        /Users/nym/Code/webpack-demo/src/template.html:75:13
      
      - template.html:82 
        /Users/nym/Code/webpack-demo/src/template.html:82:12
      
      - index.js:321 HtmlWebpackPlugin.evaluateCompilationResult
        [webpack-demo]/[html-webpack-plugin]/index.js:321:28
      
      - index.js:237 
        [webpack-demo]/[html-webpack-plugin]/index.js:237:22
      
      - task_queues.js:97 processTicksAndRejections
        internal/process/task_queues.js:97:5
      
      - async Promise.all
      
      - async Promise.all
      
    </pre>

## SOLVED WITH:

https://stackoverflow.com/questions/64294706/webpack5-automatic-publicpath-is-not-supported-in-this-browser

    //add output.publicpath in webpack.prod.js
    output: {
      publicPath: '/',
      ...
    }
<!-- OUTPUT: Unstyled page no image -->

OR

    output: {
      publicPath: '',
      ...
    }
<!-- OUTPUT: Styled page no image -->

### THEN, webpack will compile an html but the dynamic image tage will look like:

    <img src="[object Module]"/>

<!-- Hence the no image -->

## SOLVED WITH:

https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module

    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        },
      ],
    },

Since the project does not rely on a framework, setting esModule to false did the trick.