import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
  searchAuthors,
  searchTags,
  searchCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Section, Container, Prose } from "@/components/craft";
import { PostCard } from "@/components/posts/post-card";
import { FilterPosts } from "@/components/posts/filter";
import { SearchInput } from "@/components/posts/search-input";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Browse all our blog posts",
};

export const dynamic = "auto";
export const revalidate = 600;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    category?: string;
    page?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, category, page: pageParam, search } = params;

  // Fetch data based on search parameters
  const [posts, authors, tags, categories] = await Promise.all([
    getAllPosts({ author, tag, category, search }),
    search ? searchAuthors(search) : getAllAuthors(),
    search ? searchTags(search) : getAllTags(),
    search ? searchCategories(search) : getAllCategories(),
  ]);

  // Handle pagination
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  // Create pagination URL helper
  const createPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (newPage > 1) params.set("page", newPage.toString());
    if (category) params.set("category", category);
    if (author) params.set("author", author);
    if (tag) params.set("tag", tag);
    if (search) params.set("search", search);
    return `/posts${params.toString() ? `?${params.toString()}` : ""}`;
  };

  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <Prose>
            <h2>All Posts</h2>
            <p className="text-muted-foreground">
              {posts.length} {posts.length === 1 ? "post" : "posts"} found
              {search && " matching your search"}
            </p>
          </Prose>

          <div className="space-y-4">
            <SearchInput defaultValue={search} />

            <FilterPosts
              authors={authors}
              tags={tags}
              categories={categories}
              selectedAuthor={author}
              selectedTag={tag}
              selectedCategory={category}
            />
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-4">
              {paginatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
              <p>No posts found</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      page <= 1 ? "pointer-events-none opacity-50" : ""
                    }
                    href={createPaginationUrl(page - 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href={createPaginationUrl(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={
                      page >= totalPages ? "pointer-events-none opacity-50" : ""
                    }
                    href={createPaginationUrl(page + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>



        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">TagShop Blog</span>
                    <span className="block text-primary">Ecommerce Marketing Resources</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
                    Learn how to grow your ecommerce business with user-generated content, influencer marketing, and social commerce.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <a href="#featured-posts" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                            Read Latest Articles
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="featured-posts" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Posts</h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Discover our most popular articles on ecommerce marketing
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="https://tagshop.ai/wp-content/uploads/2023/02/ugc-for-ecommerce.jpg" alt="UGC for Ecommerce"/>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">
                                    <a href="#" className="hover:underline">User-Generated Content</a>
                                </p>
                                <a href="#" className="block mt-2">
                                    <h3 className="text-xl font-semibold text-gray-900">How to Use UGC to Boost Ecommerce Sales</h3>
                                    <p className="mt-3 text-base text-gray-500">Learn how to leverage customer photos and videos to increase conversions and build trust.</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="sr-only">Author Name</span>
                                    <img className="h-10 w-10 rounded-full" src="https://tagshop.ai/wp-content/uploads/2022/05/author-avatar.jpg" alt=""/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2023-05-16">May 16, 2023</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>8 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="https://tagshop.ai/wp-content/uploads/2023/01/influencer-marketing.jpg" alt="Influencer Marketing"/>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">
                                    <a href="#" className="hover:underline">Influencer Marketing</a>
                                </p>
                                <a href="#" className="block mt-2">
                                    <h3 className="text-xl font-semibold text-gray-900">The Complete Guide to Influencer Marketing for Shopify Stores</h3>
                                    <p className="mt-3 text-base text-gray-500">Discover how to find, vet, and collaborate with influencers to grow your brand.</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="sr-only">Author Name</span>
                                    <img className="h-10 w-10 rounded-full" src="https://tagshop.ai/wp-content/uploads/2022/05/author-avatar.jpg" alt=""/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2023-04-28">Apr 28, 2023</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>10 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="https://tagshop.ai/wp-content/uploads/2022/12/social-commerce.jpg" alt="Social Commerce"/>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">
                                    <a href="#" className="hover:underline">Social Commerce</a>
                                </p>
                                <a href="#" className="block mt-2">
                                    <h3 className="text-xl font-semibold text-gray-900">Instagram Shopping: How to Set Up Your Store</h3>
                                    <p className="mt-3 text-base text-gray-500">Step-by-step guide to turning your Instagram profile into a shoppable storefront.</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="sr-only">Author Name</span>
                                    <img className="h-10 w-10 rounded-full" src="https://tagshop.ai/wp-content/uploads/2022/05/author-avatar.jpg" alt=""/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Emma Rodriguez</p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime="2023-03-15">Mar 15, 2023</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=" py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Browse by Category</h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Explore our content by topic
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <a href="#" className="overflow-hidden shadow rounded-lg hover:shadow-md transition duration-300">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">User-Generated Content</h3>
                                    <p className="mt-1 text-sm text-gray-500">12 articles</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="overflow-hidden shadow rounded-lg hover:shadow-md transition duration-300">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">Influencer Marketing</h3>
                                    <p className="mt-1 text-sm text-gray-500">8 articles</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="overflow-hidden shadow rounded-lg hover:shadow-md transition duration-300">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">Social Commerce</h3>
                                    <p className="mt-1 text-sm text-gray-500">10 articles</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="overflow-hidden shadow rounded-lg hover:shadow-md transition duration-300">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">Shopify Tips</h3>
                                    <p className="mt-1 text-sm text-gray-500">15 articles</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div className="bg-primary">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to grow your ecommerce business?</span>
                    <span className="block">Start with TagShop today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary  hover:bg-gray-50">
                            Get started
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
}
