"use client";
import React , {useState} from "react";
import Image, {StaticImageData} from "next/image";
import redSocks from "@/assets/red-socks.jpg"
import blueSocks from "@/assets/blue-socks.jpg"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import  {ShoppingCart , Heart ,Star , Truck , RotateCcw , Shield} from "lucide-react"


export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-8 ">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <Card className=" overflow-hidden bg-gradient-card  shawdow-lg">
          <div className="aspect-square bg-white/80 backdrop-blur-sm p-8 flex items-center justify-center">
              <Image className="w-full h-full object-contain transition-all duration-500 ease-spring transform hover:scale-105" src={redSocks} alt="image one" width={400} height={400}/>
          </div>
          </Card>
            <div className="space-y-4 ">
                <h3 className="text-lg font-semibold text-foreground">available colors</h3>
                <div className="flex gap-4">
                    <h3>red color </h3>
                    <h3>BLUE COLOR color </h3>
                </div>
            </div>
        </div>
          <div className="space-y-8">
              <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Premium Collection</Badge>
                  <h1 className="text-4xl font-bold text-foreground">Premium Cotton Socks</h1>
                  <p className="text-lg text-muted-foreground">
                      Experience ultimate comfort with our premium cotton socks.
                      Crafted from the finest materials for all-day comfort and style.
                  </p>
              </div>

              <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>
                      ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.9) • 247 reviews</span>
              </div>

              <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-foreground">$24.99</span>
                  <span className="text-lg text-muted-foreground line-through">$39.99</span>
                  <Badge className="bg-green-100 text-green-800">37% OFF</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="w-4 h-4"/>
                      <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4"/>
                      <span>2-year warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <RotateCcw className="w-4 h-4"/>
                      <span>30-day returns</span>
                  </div>
              </div>

              <div className="space-y-4">
                  <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-foreground">Quantity:</label>
                      <div className="flex items-center border rounded-md">
                          <button

                              className="px-3 py-2 hover:bg-muted transition-colors"
                          >
                              -
                          </button>
                          <span className="px-4 py-2 border-x">Q</span>
                          <button

                              className="px-3 py-2 hover:bg-muted transition-colors"
                          >
                              +
                          </button>
                      </div>
                  </div>

                  <div className="flex gap-4">
                      <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 ease-smooth">
                          <ShoppingCart className="w-5 h-5 mr-2"/>
                          Add to Cart
                      </Button>
                      <Button size="lg" variant="outline" className="hover:bg-muted transition-all duration-300 ease-smooth">
                          <Heart className="w-5 h-5"/>
                      </Button>
                  </div>
              </div>

              <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Product Details</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex justify-between py-2 border-b">
                          <span>Size</span>
                          <span>One Size (6-11)</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                          <span>Care</span>
                          <span>Machine wash cold</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                          <span>Origin</span>
                          <span>Made in USA</span>
                      </div>
                  </div>
              </div>
      </div>
      </div>
    </div>
    </div>
  );
}
