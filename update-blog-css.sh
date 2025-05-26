#!/bin/bash

# Find all files importing the deleted CSS module
grep -l "commonBlogPost\.module\.css" $(find src -name "*.tsx") > files_to_update.txt

echo "Files that need to be updated:"
cat files_to_update.txt

echo "Removing CSS module imports..."
for file in $(cat files_to_update.txt); do
  # Replace the import line with a comment
  sed -i '' -e 's/import.*commonBlogPost\.module\.css.*/\/\/ CSS module import removed - using global styles now/g' $file
  
  # Replace CSS module class references with global classes - more comprehensive replacements
  sed -i '' -e 's/className={commonStyles\.[a-zA-Z0-9_]*}/className="blog-container"/g' $file
  sed -i '' -e 's/className={`[^`]*${commonStyles\.[a-zA-Z0-9_]*}[^`]*`}/className="blog-container"/g' $file
  sed -i '' -e 's/className={styles\.[a-zA-Z0-9_]*}/className="blog-container"/g' $file
  
  # Update specific component imports to match our current structure
  sed -i '' -e 's/import BlogPostClient from "\.\/components\/BlogPostClient";/import BlogPostClient from "@\/app\/blog\/components\/BlogPostClient";/g' $file
  
  echo "Updated $file"
done

# Also check for component files that might use CommonBlogPostClient
echo "Updating blog components to use global CSS..."
for component in $(find src/app/blog -name "*.tsx" -path "*/components/*"); do
  # Replace CSS module references in components
  sed -i '' -e 's/className={commonStyles\.[a-zA-Z0-9_]*}/className="blog-container"/g' $component
  sed -i '' -e 's/className={`[^`]*${commonStyles\.[a-zA-Z0-9_]*}[^`]*`}/className="blog-container"/g' $component
  sed -i '' -e 's/className={styles\.[a-zA-Z0-9_]*}/className="blog-container"/g' $component
  
  echo "Updated component $component"
done

echo "Done! Please check the files manually to ensure correct styling." 