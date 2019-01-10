#!/bin/bash
# Figicons
# Build Designer Pack

function DELETE_OLD_ZIP {
    rm -f ./src/DesignerPack.zip
    echo "Moved Zip into src"
}

function ZIP_SVGS {
    zip -r DesignerPack.zip ./Figicons/icons
    echo "Zipped icons into Designer Pack"
    mv DesignerPack.zip ./src/DesignerPack.zip
    echo "Moved Zip into src"
}

DELETE_OLD_ZIP
ZIP_SVGS