@ECHO OFF
:: Compile all .ts files in the same folder 
for %%f in (.\*.ts) do (
    if "%%~xf"==".ts" (
      echo %%f
      tsc %%f
    )
)